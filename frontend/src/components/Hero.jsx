import { NavLink } from 'react-router-dom';
const Hero = () => {
    return (
        <nav className="flex p-4 bg-slate-500 items-center justify-center">
            <NavLink
                to={'/'}
                className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''
                }
            >
                {/* <img /> */}
                Samyati
            </NavLink>
            <div>
                <NavLink
                    to={`/about`}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'active' : ''
                    }
                >
                    about
                </NavLink>
                <NavLink
                    to={`/sign-up`}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'active' : ''
                    }
                >
                    Sign UP
                </NavLink>
            </div>
        </nav>
    );
};

export default Hero;
