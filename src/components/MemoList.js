import Memo from './Memo';

export default function MemoList(props) {
    const memoList = props.list;
    return memoList.map(
        (memo, idx) => <Memo key={idx} data={memo}></Memo>
    );
}