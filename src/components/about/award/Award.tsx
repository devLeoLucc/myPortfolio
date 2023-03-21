import './award.css'

interface AwardItemProps {
  year: string
  title: string
  text: string
}

export function Award() {

  const AwardItem = ({year, title, text}: AwardItemProps) => {
    return (
      <div className="single__award">
        <div className="award__year">{year}</div>
        <h6 className="award__title">{title}{' - '}
          <span>
            {text}
          </span>
        </h6>
      </div>
    )
  }

  return (
    <div className="award__container d-flex align-items-center flex-wrap justify-content-between">

      <div className="award__item">
        <AwardItem
          year='Coming Soon'
          title='For my future achievements'
          text='...'
        />
      </div>

    </div>
  )
}