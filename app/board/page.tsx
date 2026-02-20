import Card from "@/app/components/Card";
import PageHeader from "../components/PageHeader";
import { EXEC_BOARD, BOARD } from "../Data/board";

const board = () => {
  return (
    <div className="eboardPage">
      <PageHeader>
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-wide text-white ">
          OUR BOARD
        </h1>
        <div className="flex flex-wrap justify-evenly pb-5">
          {EXEC_BOARD.map((member) => (
            <Card key={member.name} {...member} />
          ))}
        </div>
      </PageHeader>
      <div className="px-25 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-25 justify-items-center">
          {BOARD.map((member) => (
            <div key={member.name}>
              <Card {...member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default board;
