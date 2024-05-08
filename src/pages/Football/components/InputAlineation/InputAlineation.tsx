"use client";

import { FiRefreshCcw, FiSend } from "react-icons/fi";
import { ActionButton, ContainerActions } from "./styled-components";

export type InputAlineationProps = {
  // types...
  formation: string;
  handleFormation: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTeam: () => void;
  handleRefresh: () => void;
};

const InputAlineation = ({
  formation,
  handleFormation,
  handleRefresh,
  handleTeam,
}: InputAlineationProps) => {
  return (
    <div>
      <h3>Insert your formation</h3>
      <ContainerActions>
        <input
          type="text"
          value={formation}
          onChange={handleFormation}
          autoFocus
        />
        <ActionButton onClick={handleTeam} title="insert">
          <FiSend />
        </ActionButton>
        <ActionButton onClick={handleRefresh} title="refresh">
          <FiRefreshCcw />
        </ActionButton>
      </ContainerActions>
    </div>
  );
};

export default InputAlineation;
