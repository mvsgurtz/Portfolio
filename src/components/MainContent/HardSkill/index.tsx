export const HardSkill = ({ skillName, skillImg }: { skillName: string; skillImg: string }) => {
    return (
      <div>
        <img src={skillImg} alt={skillName} />
        <p>{skillName}</p>
      </div>
    );
  };