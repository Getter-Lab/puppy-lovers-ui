import { ExempleCard } from "@components/ExempleCard";
import style from "./styles.module.css";

export default function ExemplePage(): JSX.Element {
  return (
    <div className={style.container}>
      <h1 className={style.content}>Exemple page</h1>
      <ExempleCard />
    </div>
  );
}
