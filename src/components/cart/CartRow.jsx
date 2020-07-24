import React from 'react'
import styles from './cart.module.css'

const img = "https://gopherbot.com/images/gopher.jpg"

export default ({})=>{
    return (
        <div className={styles.rowContainer}>
            <div>
                <img src={img} alt="blissito" />
            </div>
            <div >
                <span>
                    Premium pack
                </span>
                <span>
                    20 pic Pack
                </span>
                <div>
                    <button>
                        -
                    </button>
                    <input type="number"/>
                    <button>
                        +
                    </button>
                </div>
            </div>
            <div>
                <span>x</span>
                <span>$ 150.00</span>
            </div>
        </div>
    )
}