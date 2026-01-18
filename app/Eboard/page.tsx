import Card from "@/app/components/Card";
import PageHeader from "../components/PageHeader";
import { EXEC_BOARD, BOARD } from "../Data/board";

const Eboard = () => {
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

      <div className="grid grid-cols-3 gap-6 p-10">
        {BOARD.map((member) => (
          <Card key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Eboard;
