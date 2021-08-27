import CodeSnippet from "./CodeSnippet"

export default function CodeContainer({goalCode}) {
    return (
        <div className="goalcontainer">
          {goalCode.map((code) => (
        <CodeSnippet
          key={Math.random()}
          code={code}
        //   handleDelete={handleDelete}
        />))}
        </div>
    )
}