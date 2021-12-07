const Header = ({setBackgroundDesk, setBackgroundMob}) => {
    return (
        <header className="header">
            <div className="header__bg__image">
                <img src={setBackgroundDesk} alt="" className="header__bg__image__desktop"/>
                <img src={setBackgroundMob} alt="" className="header__bg__image__mobile"/>
            </div>
        </header>
    )
}

export default Header
