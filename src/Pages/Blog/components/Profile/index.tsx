import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDatails, ProfilePicture } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/leonunesdev.png" />

      <ProfileDatails>
        <header>
          <h1>Leandro Nunes</h1>

          <ExternalLink text="Github" href="#" />
        </header>
        <p>
          Frond-End developer Frond-End developer Frond-End developer Frond-End developer Frond-End developer
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            leonunesdev
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            ...
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            46 seguidores
          </li>
        </ul>
      </ProfileDatails>
    </ProfileContainer>
  )
}