import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { expect } from "chai";
import { Orchestrator } from "../target/types/orchestrator";
import { Vault } from "../target/types/vault";
import { Exchange } from "../target/types/exchange";
import { Staking } from "../target/types/staking";

describe("solana-orchestrator", () => {
  // Configure the client to use the local cluster
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  // Load the programs from their IDLs
  const orchestratorProgram = anchor.workspace.Orchestrator as Program<Orchestrator>;
  const vaultProgram = anchor.workspace.Vault as Program<Vault>;
  const exchangeProgram = anchor.workspace.Exchange as Program<Exchange>;
  const stakingProgram = anchor.workspace.Staking as Program<Staking>;

  it("Is initialized!", async () => {
    // Initialize the orchestrator program
    const tx = await orchestratorProgram.methods
      .initialize()
      .rpc();
    
    console.log("Your transaction signature", tx);
  });
}); 