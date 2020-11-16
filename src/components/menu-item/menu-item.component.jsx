import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div style={{backgroundImage: `url(${imageUrl})`}} className='background-image'>

      </div>
      <div className='content'>
      {match.url}${linkUrl}
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='title'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem);