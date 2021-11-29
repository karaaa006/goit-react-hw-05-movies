import LoaderLib from "react-loader-spinner";
import s from "./Loader.module.scss";

export default function Loader() {
  return (
    <LoaderLib type="TailSpin" height={100} width={100} className={s.Loader} />
  );
}
