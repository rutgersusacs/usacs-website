import Card from "@/app/components/Card";
import PageHeader from "../components/PageHeader";
import { EXEC_BOARD, BOARD } from "../Data/board";

const eboard = () => {
  return (
    <div className="eboardPage">
      <PageHeader>
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-wide text-white ">
          OUR BOARD
        </h1>
        <div className="flex flex-wrap justify-evenly">
          {EXEC_BOARD.map((member) => (
            <Card key={member.name} {...member} />
          ))}
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-12 py-10 justify-items-center">
        {BOARD.map((member) => (
          <div key={member.name}>
            <Card {...member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default eboard;
