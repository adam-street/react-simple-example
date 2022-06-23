export default function Memo(props) {
    let memo = props.data;

    return <div className="wrapper">
        <div className="header">
            <div>{memo.date.toString()}</div>
        </div>
        <div className="body">
            {memo.text}
        </div>
    </div>
}