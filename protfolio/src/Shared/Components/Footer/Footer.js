import './Footer.css';

function FooterPage(){
    return(
        <div className='footer'>
            <div className='contanier'>
                        <img src='images/logo.svg' alt='logo'/>
                <div className='footer-contanier'>
                    <div className='footer-section sec-1'>
                        <div className='footer-flex'>
                            <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                    <div className='footer-section sec-2'>
                        <div className='footer-flex'>
                            <i class="fa fa-phone fa-lg" aria-hidden="true"></i>
                            <p>+1-543-123-4567</p>
                        </div>
                        <div className='footer-flex'>
                            <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
                            <p>example@fylo.com</p>
                        </div>
                    </div>
                    <div className='footer-section sec-3'>
                        <a >About Us</a>
                        <a >Jobs</a>
                        <a >Press</a>
                        <a >Blog</a>
                    </div>
                    <div className='footer-section sec-4'>
                        <a >Contact Us</a>
                        <a >Terms</a>
                        <a >Privacy</a>
                    </div>
                    <div className='footer-section sec-5'>
                    <div className=' social'>
                     <img src="images/facebook.png"/>
                       <img src="images/twitter.png"/>
                       <img src="images/linkedin.png"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FooterPage;