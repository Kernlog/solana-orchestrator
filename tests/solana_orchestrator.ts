import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolanaOrchestrator } from "../target/types/solana_orchestrator";

describe("solana_orchestrator", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SolanaOrchestrator as Program<SolanaOrchestrator>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
