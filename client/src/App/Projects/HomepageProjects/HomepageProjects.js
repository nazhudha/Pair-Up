import React from 'react'
import AllProjectPostCardContainer from '../ProjectPostCards/AllProjectPostCardContainer'

  // test project
  const dummyProjects = [{
    
    name: "Chatroulette Clone",
    difficulty: "Hard all the time!",
    expectedProjectLength: "1 week",
    category: "legitimate business venture",
    preferedSessionLength: "2",
    numberOfAdditionalUsersNeeded: "2",
    summary: "Help me make the world a better, and more naked place",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Sapien nec sagittis aliquam malesuada bibendum arcu. In eu mi bibendum neque egestas congue quisque egestas. Magna fermentum iaculis eu non diam phasellus vestibulum. Nulla facilisi cras fermentum odio. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Quam vulputate dignissim suspendisse in est ante. Justo eget magna fermentum iaculis eu non. Fames ac turpis egestas sed tempus urna et pharetra. Enim nec dui nunc mattis enim. Volutpat diam ut venenatis tellus in metus. Aliquet enim tortor at auctor. Mauris commodo quis imperdiet massa tincidunt nunc. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Vitae tempus quam pellentesque nec nam aliquam sem. Posuere ac ut consequat semper. Id neque aliquam vestibulum morbi. Velit egestas dui id ornare arcu odio ut sem. Sapien eget mi proin sed libero enim sed faucibus turpis. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Congue nisi vitae suscipit tellus mauris a diam maecenas. Eu lobortis elementum nibh tellus molestie nunc non. Senectus et netus et malesuada fames. Tortor consequat id porta nibh venenatis cras sed felis. Nunc mattis enim ut tellus elementum. Donec ultrices tincidunt arcu non sodales neque sodales ut. Eget arcu dictum varius duis at consectetur. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Et malesuada fames ac turpis.",
    users: ["62ed45cbe0c14feccdbbff28", "62ed45cbe0c14feccdbbff28"],
    
    langWeNeed: ["python", "c++"],
    additionalSkillsNeeded: "someone with experience in agile...and no shame.",
    displayLocation: true,
    commitmentLevel: "Maybe 1 session a week"
 
},{
    
  name: "Chatroulette Clone 2",
  difficulty: "Hard all the time!",
  expectedProjectLength: "1 week",
  category: "legitimate business venture",
  preferedSessionLength: "2",
  numberOfAdditionalUsersNeeded: "3",
  summary: "Help me make the world a better, and more naked place",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Sapien nec sagittis aliquam malesuada bibendum arcu. In eu mi bibendum neque egestas congue quisque egestas. Magna fermentum iaculis eu non diam phasellus vestibulum. Nulla facilisi cras fermentum odio. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Quam vulputate dignissim suspendisse in est ante. Justo eget magna fermentum iaculis eu non. Fames ac turpis egestas sed tempus urna et pharetra. Enim nec dui nunc mattis enim. Volutpat diam ut venenatis tellus in metus. Aliquet enim tortor at auctor. Mauris commodo quis imperdiet massa tincidunt nunc. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Vitae tempus quam pellentesque nec nam aliquam sem. Posuere ac ut consequat semper. Id neque aliquam vestibulum morbi. Velit egestas dui id ornare arcu odio ut sem. Sapien eget mi proin sed libero enim sed faucibus turpis. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Congue nisi vitae suscipit tellus mauris a diam maecenas. Eu lobortis elementum nibh tellus molestie nunc non. Senectus et netus et malesuada fames. Tortor consequat id porta nibh venenatis cras sed felis. Nunc mattis enim ut tellus elementum. Donec ultrices tincidunt arcu non sodales neque sodales ut. Eget arcu dictum varius duis at consectetur. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Et malesuada fames ac turpis.",
  users: ["62ed45cbe0c14feccdbbff28"],
  
  langWeNeed: ["python", "c++"],
  additionalSkillsNeeded: "someone with experience in agile...and no shame.",
  displayLocation: true,
  commitmentLevel: "Maybe 1 session a week"

},{
    
  name: "Chatroulette Clone 3",
  difficulty: "Hard all the time!",
  expectedProjectLength: "1 week",
  category: "legitimate business venture",
  preferedSessionLength: "2",
  numberOfAdditionalUsersNeeded: "4",
  summary: "Help me make the world a better, and more naked place",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Sapien nec sagittis aliquam malesuada bibendum arcu. In eu mi bibendum neque egestas congue quisque egestas. Magna fermentum iaculis eu non diam phasellus vestibulum. Nulla facilisi cras fermentum odio. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Quam vulputate dignissim suspendisse in est ante. Justo eget magna fermentum iaculis eu non. Fames ac turpis egestas sed tempus urna et pharetra. Enim nec dui nunc mattis enim. Volutpat diam ut venenatis tellus in metus. Aliquet enim tortor at auctor. Mauris commodo quis imperdiet massa tincidunt nunc. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Vitae tempus quam pellentesque nec nam aliquam sem. Posuere ac ut consequat semper. Id neque aliquam vestibulum morbi. Velit egestas dui id ornare arcu odio ut sem. Sapien eget mi proin sed libero enim sed faucibus turpis. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Congue nisi vitae suscipit tellus mauris a diam maecenas. Eu lobortis elementum nibh tellus molestie nunc non. Senectus et netus et malesuada fames. Tortor consequat id porta nibh venenatis cras sed felis. Nunc mattis enim ut tellus elementum. Donec ultrices tincidunt arcu non sodales neque sodales ut. Eget arcu dictum varius duis at consectetur. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Et malesuada fames ac turpis.",
  users: ["62ed45cbe0c14feccdbbff28", "62ed45cbe0c14feccdbbff28", "62ed45cbe0c14feccdbbff28"],
  
  langWeNeed: ["python", "c++"],
  additionalSkillsNeeded: "someone with experience in agile...and no shame.",
  displayLocation: true,
  commitmentLevel: "Maybe 1 session a week"

},]


export default function HomepageProjects() {
  return (
    <AllProjectPostCardContainer projects={dummyProjects}/>
  )
}
