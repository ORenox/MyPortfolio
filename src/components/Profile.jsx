import Carousel from './Carousel'  
import SocialLinks from './SocialLinks'
import StackIcons from './StackIcons'

export default function Profile(){
    return(
        <section className="min-h-screen  flex flex-col items-center bg-bg text-text text-center ">
            <div className="w-40 h-40 mb-6">
                <img 
                src="/pictures/profilePicture.jpg" 
                alt="Profile picture" 
                className="w-full h-full rounded-full object-cover border-4 border-primary shadow-lg" />
            </div>

            <h1 className= "text-4xl font-bold text-primary mb-2">
                Hello. I am Renato
            </h1>
            <p className="max-w-full text-sm opacity-80">
                I am a Mechatronics Engineer and Full Stack Developer passionate about building solutions that bridge hardware and software. I specialize in designing intelligent systems, from embedded electronics and industrial automation to modern web applications, combining engineering precision with clean, scalable code. I enjoy turning complex problems into practical, efficient, and user-focused solutions.
            </p>

            <div className="mt-5"> 
                <Carousel
                phrases={[
                    "With great power comes great electricity bill",
                    "Turning coffee into code… and electricity into heat",
                    "Turning ideas into code, and bugs into features.",
                    "Code first, panic later.",
                    "Building the future, one bug at a time.",
                    "If it works, don’t touch it.",
                    "Making machines do the boring stuff.",
                    "It works on my machine.",
                    "404: Sleep not found.",
                    "I put the ‘pro’ in programmer.",
                    "Debugging is like being a detective in your own crime.",
                    "Innovation starts with a single line of code.",
                    "Still debugging life.",
                    "Programmer by day, debugger by night.",
                    "Hello World is just the beginning.",
                    "Problems are just algorithms waiting to be written.",
                    "Building things that matter",
                    "Debugging is like being a detective in a crime movie where you are also the murderer."

                ]}
                interval={4000}
                duration={800}
                className="text-xl font-medium text-text my-10"
                />
                <SocialLinks />
                <StackIcons/>

            </div>
            


        </section>
    )
}