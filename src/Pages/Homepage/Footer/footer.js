import React from "react";
import './index.css'

const Footer = () => {
    return (
        <div className = "footer">
            <div className = "flex-footer">
                <div className = "flex-icon-container">
                    <div className = "icon">
                        <a href = "https://www.facebook.com/makemytrip/">
                        <img   className = "logo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNc9OFLuJj1V18E40zsMVSKWPG0nrzSVLBFA&usqp=CAU" alt = "twitter"/>
                        </a>
                    </div>
                    <div className = "icon">
                        <a href = "https://twitter.com/makemytrip/">
                            <img   className = "resizeLogo" src = "data:image/png;base64,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" alt = "twitter"/>
                        </a>
                    </div>
                </div>
                <div className = "message footer-text">
                <p>© 2021 MAKEMYTRIP PVT. LTD.</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;