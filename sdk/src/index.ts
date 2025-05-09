import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';

// Define interfaces for the IDLs when they're generated
interface OrchestrationSdk {
  connection: Connection;
  provider: anchor.AnchorProvider;
  orchestratorProgram: Program;
  vaultProgram: Program;
  exchangeProgram: Program;
  stakingProgram: Program;
}

/**
 * Creates a new SDK instance for the Solana Orchestrator
 */
export function createSdk(
  connection: Connection,
  wallet: anchor.Wallet
): OrchestrationSdk {
  const provider = new anchor.AnchorProvider(
    connection,
    wallet,
    { commitment: 'confirmed' }
  );

  // Once we have IDLs, we can load the programs here
  const orchestratorProgram = null as unknown as Program;
  const vaultProgram = null as unknown as Program;
  const exchangeProgram = null as unknown as Program;
  const stakingProgram = null as unknown as Program;

  return {
    connection,
    provider,
    orchestratorProgram,
    vaultProgram,
    exchangeProgram,
    stakingProgram,
  };
}

// Export all utility functions for the SDK
export * from './utils'; 