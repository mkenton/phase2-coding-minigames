import CodeSnippet from "./CodeSnippet"

export default function CodeContainer({codes}) {
    return (
        <div className="goalcontainer">
          {codes.map((code) => (
        <CodeSnippet
          key={Math.random()}
          code={code}
        //   handleDelete={handleDelete}
        />))}
        </div>
    )
}