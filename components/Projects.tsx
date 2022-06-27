import Project from "../components/Project";
import Divider from "./Divider";
import Heading from "./Heading";

const projects: any = {
  Ruzzle: {
    title: "Ruzzle Solver",
    image: "ruzzle-solver.png",
    excerpt:
      "Designed a program to play Ruzzle, a mobile word finding game in a 4x4 grid. Utilized optical character recognition, custom trained models, graph theory, and Android automation.",
    sourceCode: "https://github.com/dchen327/ruzzle-solver",
  },
  Arduino: {
    title: "Arduino Obstacle Avoider",
    image: "arduino-car.jpg",
    excerpt:
      "My first dabble into the world of robotics, this Arduino car uses an ultrasonic sensor to avoid bumping into obstacles. Later, I used ROS models for simulation in Gazebo to optimize path following.",
    sourceCode: "https://github.com/dchen327/Arduino-Obstacle-Avoiding-Car",
  },
  Isola: {
    title: "Isola Game",
    image: "isola-game.png",
    excerpt:
      "An easy to learn 2 player turned based game, Isola involves players moving and destroying blocks in an attempt to isolate the opposing player. After learning about the minimax algorithm in Stanford CS221 (Intro to AI), I decided to implement it in a more difficult setting, since Isola requires 2 moves per turn rather than per alternating moves.",
    sourceCode: "https://github.com/dchen327/isola-game",
  },
  Ambient: {
    title: "Ambient Light Color Adjuster",
    image: "ambient-light-color-adjuster.png",
    excerpt:
      "After purchasing a color changing lightbulb to use a sunrise simulator alarm clock, I decided to have some fun with adjusting ambient light to match a game's dominant color.",
    sourceCode: "https://github.com/dchen327/ambient-light-color-adjuster",
  },
  CartPole: {
    title: "CartPole RL",
    image: "cartpole.png",
    excerpt:
      "After learning about Reinforcement Learning in Stanford CS221 (blackjack HW), I applied vanilla Q-learning with epsilon-greedy to OpenAI Gym's CartPole problem. I was able to meet the criterion for solving the problem without any advanced methods such as Deep Q Networks or Policy Gradient.",
    sourceCode: "https://github.com/dchen327/cartpole-rl",
  },
  Codenames: {
    title: "Codenames",
    image: "codenames.png",
    excerpt:
      "A simple application of Stanford GloVe word vectors to the game codenames, where a spymaster attempts to give a clue to hint at certain words, while avoiding others.",
    sourceCode: "https://github.com/dchen327/codenames",
  },
  SunriseAlarm: {
    image: "sunrise-alarm.jpg",
    title: "Sunrise Alarm",
    excerpt:
      "We always feel more refreshed waking up to the sunrise on weekends without a blaring alarm clock. This Android tasker script uses an adjustable light to simulate the sunrise, as well as the sunset before sleep. REM sleep cycles are considered for alarm times.",
    sourceCode:
      "https://taskernet.com/shares/?user=AS35m8nIi33jowYY%2F6X7N9Hf12XdqPGnFaDesuuxyUyrP8D8vG9h3CanL1otRjwH2n7Lxo1AmA%3D%3D&id=Profile%3AAlarm",
  },
  Nonogram: {
    image: "nonogram-solver.png",
    title: "Nonogram Solver",
    excerpt:
      "With Selenium and bit operations, this fully solves nonogram visual logic puzzles.",
    sourceCode: "https://github.com/dchen327/nonogram-solver",
  },
  Pictionary: {
    image: "sketchful_demo.png",
    title: "Pictionary AutoDraw",
    excerpt:
      "With image preprocessing, color matching, brush size optimization for resolution, and PyAutoGui, AutoDraw takes images and turns them into beautiful art on a canvas.",
    sourceCode: "https://github.com/dchen327/pictionary-autodraw",
  },
  pingmote: {
    image: "pingmote.png",
    title: "pingmote (Poor Man's Discord Nitro)",
    excerpt:
      "Developed hotkey triggered cross-platform global emote picker to create and quickly insert custom images and gifs.",
    sourceCode: "https://github.com/dchen327/pingmote",
  },
  RedditUsernameGenerator: {
    image: "slashgen.png",
    title: "Reddit Username Generator",
    excerpt:
      "Trained LSTMs and GRUs on 400,000 Reddit usernames for text generation, then integrated into React through TensorFlow.js and Flask and deployed on Heroku.",
    sourceCode: "https://github.com/dchen327/reddit-username-generator",
    demo: "https://reddit-username-generator.herokuapp.com/",
  },
  Backgammon: {
    image: "backgammon.png",
    title: "Backgammon Dashboard",
    excerpt:
      "Developed website for rapid iteration regression testing to create optimal, memorable backgammon strategies based on game state.",
    demo: "https://backgammon-dashboard.herokuapp.com/",
  },
  EduTools: {
    image: "edutools.png",
    title: "EduTools",
    excerpt:
      "Winner of HackPHS 2020: With the worsening global pandemic, online learning has severely magnified inequality for students with limited access to technology. EduTools makes traditional online learning accessible without the need for internet access: all you need is a basic phone.",
    sourceCode: "https://github.com/dchen327/EduTools",
  },
};

const projectOrder = [
  "Backgammon",
  "pingmote",
  "Ruzzle",
  "RedditUsernameGenerator",
  "Isola",
  "Arduino",
  "CartPole",
  "EduTools",
  "SunriseAlarm",
  "Codenames",
  "Ambient",
  "Pictionary",
  "Nonogram",
];

export default function Projects() {
  return (
    <section
      id="Projects"
      className="section"
      style={{ backgroundColor: "#F9F7F5", overflowX: "hidden" }}
    >
      <Heading text="Projects" />
      <Divider />
      {projectOrder.map((projectName, index) => (
        <Project {...projects[projectName]} imgSide={index % 2} key={index} />
      ))}
    </section>
  );
}
