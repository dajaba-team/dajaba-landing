// 줄 배열을 <br>로 이어 붙여요
export default function MultiLine({ lines }) {
  return lines.map((line, index) => (
    <span key={line}>
      {line}
      {index < lines.length - 1 && <br />}
    </span>
  ))
}
