import { Tags } from "./Tags";
export const AboutSection = () => {
  const skills = ['Next.js', 'React', 'Typescript', 'Redux', 'Tailwind',' Nodejs', 'Express', 'REST API', 'MySql', 'MongoDB', 'Git', 'Jest'];
  return (
    <section id="about" className="relative flex flex-col items-center min-h-full">
      <div className="container flex flex-col-reverse mb-36  lg:mt-48 space-y-12 lg:space-y-0 lg:flex-row">
        {/* experince section */}
        <div className="flex flex-col items-center mt-20 lg:mt-0 space-y-8 lg:w-1/2">
          <div className="mb-8">
            <h2 className="max-w-md text-4xl font-bold text-center lg:text-left">Experience</h2>
          </div>
          {/* list item 1 */}
          <div className="flex flex-col space-y-3 lg:space-x-6 lg:space-y-0 lg:flex-row">
            <div className="rounded-full bg-seaGreen lg:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full lg:py-1 bg-seaGreen">
                  01
                </div>
                <h3 className="text-base font-bold lg:mb-4 lg:hidden">
                  Frontend Developer
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold lg:block">
                Frontend Developer
              </h3>
              <div className="my-3">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-700">Dev Launchers</h2>
                <h3 className="text-zinc-500">04/2022 - 09/2022 (6 months)</h3>
              </div>
              <ul className="text-darkGrayishBlue">
                <li>Developing features to enhance the user experience.</li>
                <li>Optimizing web pages for maximum speed and scalability.</li>
                <li>Write reusable code and libraries.</li>
                <li>Ensuring cross-platform optimization for mobile phones</li>
                <li>Testing the site for usability and fixing any bugs</li>
              </ul>
            </div>
          </div>
          {/* list item 2 */}
          <div className="flex flex-col space-y-3 lg:space-x-6 lg:space-y-0 lg:flex-row">
            <div className="rounded-full bg-seaGreen lg:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full lg:py-1 bg-seaGreen">
                  02
                </div>
                <h3 className="text-base font-bold lg:mb-4 lg:hidden">
                  Product Owner
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold lg:block">
                Product Owner
              </h3>
              <div className="my-3">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-700">Dev Launchers</h2>
                <h3 className="text-zinc-500">09/2021 - 03/2022 (6 months)</h3>
              </div>
              <ul className="text-darkGrayishBlue">
                <li>Created mind-maps, mock-ups and wireframes.</li>
                <li>Created product plans and product backlogs</li>
                <li>Write reusable code and libraries.</li>
                <li>Ensuring cross-platform optimization for mobile phones</li>
              </ul>
            </div>
          </div>
          {/* list item 3 */}
          <div className="flex flex-col space-y-3 lg:space-x-6 lg:space-y-0 lg:flex-row">
            <div className="rounded-full bg-seaGreen lg:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full lg:py-1 bg-seaGreen">
                  03
                </div>
                <h3 className="text-base font-bold lg:mb-4 lg:hidden">
                  Business Analyst
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold lg:block">
                Business Analyst
              </h3>
              <div className="my-3">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-700">Promena LLP</h2>
                <h3 className="text-zinc-500">04/2020 - 04/2021 (1 year)</h3>
              </div>
              <ul className="text-darkGrayishBlue">
                <li> Documentation of clients requirements.</li>
                <li>Creating user stories with BPMN diagrams</li>
                <li>Creating mockups and prototypes for clients demo. </li>
                <li>Explaining flow to the development team.</li>
                <li>Communicated between clients and development team.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="flex flex-col items-center  space-y-12 lg:w-1/2">
          <div className="mb-8">
            <h2 className="max-w-md text-4xl font-bold text-center lg:text-left">Skills</h2>
          </div>
          <div className="grid gap-x-8 ml-6 gap-y-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill,i) => (
              <Tags value={skill} key={i}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
