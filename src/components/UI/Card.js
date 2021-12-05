import './Card.css';

const Card=(props)=>{
    const classes =props.className+' card'; //all properties +class
    return <div className={classes}>{props.children}</div>
}

export default Card;