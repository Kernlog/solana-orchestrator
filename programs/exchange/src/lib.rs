use anchor_lang::prelude::*;

declare_id!("7F2HX2UdZCFj5DJTgFXgD5qMv8HTCrXDoUgr2bXzqShL");

#[program]
pub mod exchange {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {} 