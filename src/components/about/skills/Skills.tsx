import './skills.css'

interface SkillItemProps {
  title: string
  percentage: string
}

export function Skills() {

  const frontendSkills = [
    {
      title: 'HTML/CSS',
      percentage: '95%'
    },

    {
      title: 'Javascript',
      percentage: '90%'
    },

    {
      title: 'ReactJS',
      percentage: '80%'
    },

    {
      title: 'Tailwind',
      percentage: '80%'
    },
  ]

  const backendSkills = [
    {
      title: 'NodeJS',
      percentage: '60%'
    },

    {
      title: 'Express',
      percentage: '70%'
    },

    {
      title: 'Prisma',
      percentage: '40%'
    },

    {
      title: 'Typescript',
      percentage: '80%'
    },
  ]

  const SkillItem = ({title, percentage}: SkillItemProps) => {
    return (
      <div className="skill__data mb-3">
        <div className="skill__title d-flex align-items-center justify-content-between">
          <h6>{title}</h6>
          <span>{percentage}</span>
        </div>

        <div className="skill__bar">
          <span 
            className="skill__bar-percentage"
            style={{width: `${percentage}`}}
          >
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="skills__wrapper d-flex gap-5">
      <div className="frontend__skill w-50">

        {
          frontendSkills.map((item, index) => {
            return (
              <SkillItem
                title={item.title}
                percentage={item.percentage}
                key={index}
              />
            )
          })
        }

      </div>

      <div className="backend__skill w-50">

        {
          backendSkills.map((item, index) => {
            return (
              <SkillItem
                title={item.title}
                percentage={item.percentage}
                key={index}
              />
            )
          })
        }

      </div>
    </div>
  )
}