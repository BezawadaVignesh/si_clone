import React, {
    createRef,
    useContext,
    useEffect,
    useRef,
    useState,
  } from "react";
  import SplitPaneContext from "../context/SplitPaneContext";
  
interface SplitPaneProps extends React.HTMLAttributes<HTMLDivElement>{
  children?: React.ReactNode
} 

const SplitPane = ({children, ...props}: SplitPaneProps ) => {
  const [clientHeight, setClientHeight] = useState<number | null>(null);
  const [clientWidth, setClientWidth] = useState<number | null>(null);
  const yDividerPos = useRef<number | null>(null);
  const xDividerPos = useRef<number | null>(null);

  const onMouseHoldDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    yDividerPos.current = e.clientY;
    xDividerPos.current = e.clientX;
  };

  const onMouseHoldUp = () => {
    yDividerPos.current = null;
    xDividerPos.current = null;
  };

  const onMouseHoldMove = (e:MouseEvent) => {
    if (!yDividerPos.current && !xDividerPos.current) {
      return;
    }

    setClientHeight(clientHeight! + e.clientY - yDividerPos.current!);
    setClientWidth(clientWidth! + e.clientX - xDividerPos.current!);

    yDividerPos.current = e.clientY;
    xDividerPos.current = e.clientX;
  };

  useEffect(() => {
    document.addEventListener("mouseup", onMouseHoldUp);
    document.addEventListener("mousemove", onMouseHoldMove);

    return () => {
      document.removeEventListener("mouseup", onMouseHoldUp);
      document.removeEventListener("mousemove", onMouseHoldMove);
    };
  });

  return (
    <div {...props}>
      <SplitPaneContext.Provider
        value={{
          clientHeight,
          setClientHeight,
          clientWidth,
          setClientWidth,
          onMouseHoldDown,
        }}
      >
        {children}
      </SplitPaneContext.Provider>
    </div>
  );
};

export const Divider = (props:React.ComponentProps<'div'>) => {

  const { onMouseHoldDown } = useContext(SplitPaneContext)!;

  return <div {...props} onMouseDown={onMouseHoldDown} />;
};

export const SplitPaneTop = ({children, ...props}: SplitPaneProps) => {
  const topRef = createRef<HTMLDivElement>();
  const { clientHeight, setClientHeight } = useContext(SplitPaneContext)!;
  
  useEffect(() => {
    if(!topRef.current) return;
    if (!clientHeight) {
      setClientHeight(topRef.current.clientHeight);
      return;
    }

    topRef.current.style.minHeight = clientHeight + "px";
    topRef.current.style.maxHeight = clientHeight + "px";
  }, [clientHeight]);

  return (
    <div {...props} className="split-pane-top" ref={topRef}>
      {children}
    </div>
  );
};

export const SplitPaneBottom = ({children, ...props}: SplitPaneProps) => {
  
  return (
    <div {...props} className="split-pane-bottom">
      {children}
    </div>
  );
};

export const SplitPaneLeft = ({children, ...props}: SplitPaneProps) => {
  const topRef = createRef<HTMLDivElement>();
  const { clientWidth, setClientWidth } = useContext(SplitPaneContext)!;

  useEffect(() => {
    if (!clientWidth) {
      setClientWidth(topRef.current!.clientWidth / 2);
      return;
    }

    topRef.current!.style.minWidth = clientWidth + "px";
    topRef.current!.style.maxWidth = clientWidth + "px";
  }, [clientWidth]);

  return <div {...props} className="split-pane-left" ref={topRef} >
    {children}
  </div>;
};

export const SplitPaneRight = ({children, ...props}: SplitPaneProps) => {
  
  return (
    <div {...props} className="split-pane-right">
      {children}
    </div>
  );
};

export default SplitPane;