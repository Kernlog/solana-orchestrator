use anchor_lang::prelude::*;

declare_id!("9HJNMnsfb82WhdXACjGU9T2L7ZdbHZ1FKbwqHPHDuwVs");

#[program]
pub mod staking {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {} 