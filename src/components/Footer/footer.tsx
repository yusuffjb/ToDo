import React from 'react'
import './footer.css';

const Footer: React.FC = () => {
    return (
        <div className="container-footer">
            <footer className="bg-dark text-light py-3" >
                <p className="text-center">Copyright &copy; Todos-List.com</p>
            </footer>
        </div>
    )
}

export default Footer;