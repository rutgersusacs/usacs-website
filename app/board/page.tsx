import Card from "@/app/components/Card";
import PageHeader from "../components/PageHeader";
import { EXEC_BOARD, BOARD } from "../Data/board";

const board = () => {
  return (
    <div className="eboardPage">
      <PageHeader>
        <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-extrabold tracking-wide text-white text-center">
          OUR BOARD
        </h1>

        <div className="flex flex-wrap justify-center gap-25 pb-5">
          {EXEC_BOARD.map((member) => (
            <Card key={member.name} {...member} />
          ))}
        </div>
      </PageHeader>

      <div className="px-4 sm:px-8 lg:px-20 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {BOARD.map((member) => (
            <Card key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default board;
