import PathLink from "../components/pathlink.jsx";

export default function MinFooter(){
    return(
        <div class="Fcontainer">

        <header>
        <h1>Join The Education Community</h1>
        <p>Join the Education Community today and be part of a movement that's transforming minds and shaping tomorrows.</p>
        </header>


        <form class="subscribe" action="https://formspree.io/f/xovajeoa" method="post">
        <textarea
        id="message"
        name="message"
        placeholder="Enter your message for Manav"
      ></textarea>
      <br></br>
                
                <input type="email" placeholder="Enter your email " name="email"/>
                <button type="submit">Subscribe <span>&#8594;</span></button>
        </form>


        <footer>
                    {/* <div class="footer-left">
                       
                        <p>©2023 Solarsystemdesign</p>
                    </div> */}
                   
                    
                    <div class="footer-right">
                   
                        <nav>
                        <span>©2023 Solarsystemdesign</span>
                    <PathLink/>
                    </nav>
                    </div>
        </footer>
</div>
    )
}