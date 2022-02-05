import React, { Component } from 'react'
import './post-list-item.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export class PostListItem extends Component {
  render() {
    const {
      label,
      onDelete,
      onToggleImportant,
      onToggleLiked,
      important,
      like,
    } = this.props
    let classNames = 'app-list-item d-flex justify-content-between'

    if (important) {
      classNames += ' important'
    }

    if (like) {
      classNames += ' like'
    }

    return (
      <div className={classNames}>
        <span className='app-list-item-label' onClick={onToggleLiked}>
          {label}
        </span>
        <div className='d-flex justify-content-center align-items-center'>
          <button
            type='button'
            className='btn-star btn-sm'
            onClick={onToggleImportant}
          >
            <FontAwesomeIcon icon={faStar} />
          </button>
          <button type='button' className='btn-trash btn-sm' onClick={onDelete}>
            <i className='fa fa-trash-o'></i>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <i className='fa fa-heart'></i>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    )
  }
}
