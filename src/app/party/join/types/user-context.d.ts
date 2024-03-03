import { Dispatch } from "react";
import { PlayerRole } from ".";
import { SetState } from "@/types";

export interface UserContext {
    username: string,
    setUsername: Dispatch<string>,
    userRole: PlayerRole
    setUserRole: SetState<PlayerRole>
    isOwner: boolean,
    setIsOwner: SetState<boolean>
}