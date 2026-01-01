import { useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
};

export default function SpotlightName({ text, className }: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  const setPos = (clientX: number, clientY: number) => {
    const el = wrapRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${clientX - rect.left}px`);
    el.style.setProperty("--y", `${clientY - rect.top}px`);
  };

  const onEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setPos(e.clientX, e.clientY);
    setActive(true);
  };

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPos(e.clientX, e.clientY);
  };

  const onLeave = () => setActive(false);

  return (
    <div
      ref={wrapRef}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`invert-wrap mx-auto inline-block select-none ${
        active ? "is-active" : ""
      }`}
    >
      <h1 className={`invert-name ${className ?? ""}`} data-text={text}>
        {text}
      </h1>
    </div>
  );
}
