import React, { useState } from "react";
import './App.css'
import {BsArrowDownCircle} from 'react-icons/bs'

const ImmutabilityForm = () => {
  const [person, setPerson] = useState({
    PrototypeForm: {
      key1: 'Barbara',
      key2: 'Hepworth',
      key3: 'bhepworth@react.com',
      key4: 'love cats'
  }
  })

  const handleKey1 = (e) => {
    setPerson({
      ...person,
      PrototypeForm: {
        ...person.PrototypeForm,
        key1: e.target.value
      }
    })
  }

  const handleKey2 = (e) => {
    setPerson({
      ...person,
      PrototypeForm: {
        ...person.PrototypeForm,
        key2: e.target.value
      }
    })
  }

  const handleKey3 = (e) => {
    setPerson({
      ...person,
      PrototypeForm: {
        ...person.PrototypeForm,
        key3: e.target.value
      }
    })
  }

  const handleKey4 = (e) => {
    setPerson({
      ...person,
      PrototypeForm: {
        ...person.PrototypeForm,
        key4: e.target.value
      }
    })
  }

    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#AB0DE5',
        margin: 0,
        padding: 0
      }}>
        <div className="block" style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: 'white',
          padding: '20px 40px',
          backgroundColor: '#D15CED',
          borderRadius: '20px',
        }}>
          <span 
          style={{
            marginLeft: '70px'
          }}>Name</span>
          <span
          style={{
            marginLeft: '20px'
          }}
          >LastName</span>
          <span style={{
            marginLeft: '10px'
          }}>Email</span>
          <span 
          style={{
            marginRight: '40px'
          }}>What she loves</span>
        </div>

          <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: 'white',
          padding: '20px 40px',
          backgroundColor: '#D15CED',
          borderRadius: '20px',
          margin: '10px',
          flexWrap: 'wrap'
        }}>
        <div>
          <input
            type="text"
            value={person.PrototypeForm.key1}
            onChange={handleKey1}
            style={{
              border: 'none',
              borderRadius: '10px',
              padding: '4px',
              textAlign: 'center',
              fontSize: '15px'
            }}
          />
          <p
          style={{
            marginLeft: '70px'
          }}
          >{person.PrototypeForm.key1}</p>
        </div>

        <div>
          <input
            type="text"
            value={person.PrototypeForm.key2}
            onChange={handleKey2}
            style={{
              border: 'none',
              borderRadius: '10px',
              padding: '4px',
              textAlign: 'center',
              fontSize: '15px'
            }}
          />
          <p
          style={{
            marginLeft: '60px'
          }}
          >{person.PrototypeForm.key2}</p>
        </div>

        <div>
          <input
            type="text"
            value={person.PrototypeForm.key3}
            onChange={handleKey1}
            style={{
              border: 'none',
              borderRadius: '10px',
              padding: '4px',
              textAlign: 'center',
              fontSize: '15px'
            }}
          />
          <p
          style={{
            marginLeft: '20px'
          }}
          >{person.PrototypeForm.key3}</p>
        </div>

        <div>
          <input
            type="text"
            value={person.PrototypeForm.key4}
            onChange={handleKey4}
            style={{
              border: 'none',
              borderRadius: '10px',
              padding: '4px',
              textAlign: 'center',
              fontSize: '15px',
            }}
          />
          <p
          style={{
            marginLeft: '65px'
          }}
          >{person.PrototypeForm.key4}</p>
        </div>
          </div>

        
      </div>
    )

}

export default ImmutabilityForm

