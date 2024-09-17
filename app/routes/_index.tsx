import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "研究用ページ" },
    { name: "description", content: "WebAssemblyの研究のためのページ" },
  ];
};

export default function Index() {
  
  return (
    <>
      <h1 className="text-center">WebAssemblyの研究のためのページ</h1>
      
      <h2>通常環境</h2>
      <span className="w-96 flex  justify-center border rounded-lg [&>section]:m-3 [&>section]:p-3">
        <section>
          <h3>
            一色の三角形
          </h3>
          <Link to="/normal">見る</Link>
        </section>
        <section>
          <h3>
            グラデーションの三角形
          </h3>
          <Link to="/colorful">見る</Link>
        </section>
      </span>
      
      <h2>Worker環境 -実装前-</h2>
      <span className="w-96 flex justify-center  border rounded-lg [&>section]:m-3 [&>section]:p-3">
        <section>
          <h3>
            一色の三角形
          </h3>
          <Link to="/worker/normal">見る</Link>
        </section>
        <section>
          <h3>
            グラデーションの三角形
          </h3>
          <Link to="/worker/colorful">見る</Link>
        </section>
      </span>
    </>
  );
}
