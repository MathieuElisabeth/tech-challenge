import { deleteName, updateName } from '@/utils/argonautes'
import React, { useState } from 'react'

export const CardName = ({ name, regex }) => {
  const [newName, setNewName] = useState(name.value)
  const [isEditing, setIsEditing] = useState(false)

  const handleUpdate = () => {
    if (regex.test(newName) && newName.trim() !== '') {
      setIsEditing(false)
      updateName({ docId: name.id, name: newName })
    }
   
  }

  const cancelUpdate = () => {
    setIsEditing(false)
    setNewName(name.value)
  }

  return (
    <div className="member-item">
      {
        isEditing ? (
          <>
            <input onChange={evt => setNewName(evt.target.value)} value={newName} />
            <div>
              <i className="fa-solid fa-check" onClick={handleUpdate}></i>
              <i className="fa-solid fa-circle-xmark" onClick={cancelUpdate}></i>
            </div>
          </>
        ) : (
          <>
            {name.value}
            <div>
              <i className="fa-solid fa-pen-to-square" onClick={() => setIsEditing(true)}></i>
              <i className="fa-solid fa-trash-can" onClick={() => deleteName(name.id)}></i>
            </div>
          </>
        )
      }
    </div>
  )
}
