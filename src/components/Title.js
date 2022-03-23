import './css/Title.css'

export default function Title({ title, subtitle }) {
  return (
    <div className='title-block'>
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
    </div>
  )
}
