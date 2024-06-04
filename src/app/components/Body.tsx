
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Body() {
  return (
    <div className="p-2 leading-relaxed">
      <div>
        <h2 className="text-white"><FontAwesomeIcon
          icon={faCode}
          className=""
          size="sm"
          /> About  </h2>
        <p>
        Howdy! My name is H (pronounced like Aech from Ready Player One), and I&apos;m a Frontend Developer and Freelancer based in Austin, TX, with a passion for user experience. <b>I&apos;m currently accepting new clients, so please DM me if you&apos;d like to bring your vision to life! </b>
        </p>
      </div>
      <div className="pt-3">
        <h2 className="text-white"> <FontAwesomeIcon
          icon={faCode}
          className=""
          size="sm"
          /> Interests</h2>
        <p>
        When I&apos;m not coding, I&apos;m reading through cookbooks like they&apos;re novels, swimming in Barton Springs, hiking charted trails, playing with my cat Piglette, or working on my current project: <a href="/journal" className="decoration-rose-500 underline decoration-dotted font-bold">an online National Park Passport! </a> 
        </p>
      </div>
    </div>
  );
}
