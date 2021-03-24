import React from "react";
import Avatar from "../../Display/Avatar/Avatar";
import IconButton from "../../Inputs/Buttons/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function ComplexCard({ onClick, avatar, image }) {
  const [isLike, setLike] = React.useState(false);
  const [cardinfo, setCardinfo] = React.useState(false);

  const createRipple = (e) => {
    onClick && onClick();
    let x = parseInt(e.clientX - e.target.offsetTop);
    let y = parseInt(e.clientY - e.target.offsetLeft);
    console.log(x, y);
    const ripple = document.createElement("span");
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    e.target.parentNode.appendChild(ripple);
    setInterval(() => {
      ripple.remove();
    }, 1000);
    // console.log(e.target.parentNode);
  };

  const handleExpand = () => {
    !cardinfo ? setCardinfo(true) : setCardinfo(false);
  };
  return (
    <div className="card__complex">
      <div className="card__complex__header">
        <div className="card__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="card__header__info">
          <span className="heading__header">Shrimp and Chorizo Paella</span>
          <span className="header__subheading">September 14, 2016</span>
        </div>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
      <div className="card__image" onClick={createRipple}>
        <img src={image} alt="card__image__alt_text" />
      </div>
      <div className="card__complex__footer">
        <div className="control__footer__left">
          <IconButton onClick={() => (isLike ? setLike(false) : setLike(true))}>
            <FavoriteIcon style={{ fill: isLike ? "red" : "#000" }} />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </div>
        <div className="control__footer__right">
          <IconButton onClick={handleExpand}>
            {!cardinfo ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          </IconButton>
        </div>
      </div>
      <div
        className={`card__hidden__desc ${
          cardinfo && "card__hidden__desc__enabled"
        }`}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          qui praesentium reiciendis deleniti consectetur? Commodi, quaerat
          temporibus. Sequi veniam odio ullam, rerum quod odit molestias nisi!
          Earum, neque odio! Doloribus?
        </p>
      </div>
    </div>
  );
}

export default ComplexCard;
