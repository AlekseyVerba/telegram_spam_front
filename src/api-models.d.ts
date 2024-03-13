declare namespace Components {
    namespace Schemas {
        export interface AuthSendCodeResponse {
            phoneCodeHash: string;
        }
        export interface AuthUserWithJwtToken {
            token: string;
            user: UserDTO;
        }
        export interface AuthUserWithJwtTokenResponse {
            kind: string;
            authUserWithJwtToken: AuthUserWithJwtToken;
        }
        export interface Buffer {
        }
        export interface ConfirmRegistrationTokenDTO {
            code: string;
            email: string;
        }
        export interface CreateTaskDTO {
            name: string;
            message: string;
            cron: string;
            is_active?: boolean;
            chats: string[];
        }
        export interface DialogDTO {
            title: string;
            entityId: number; // int64
            photo?: Buffer;
        }
        export interface DialogsResponseDTO {
            kind: string;
            dialogs: DialogDTO;
        }
        export interface LoginDTO {
            /**
             * Email
             */
            email: string;
            /**
             * Пароль
             */
            password: string;
        }
        export interface RegistrationDTO {
            /**
             * Email
             */
            email: string;
            /**
             * Пароль
             */
            password: string;
        }
        export interface RegistrationResponseDTO {
            kind: string;
            registrationMessage: string;
        }
        export interface SendCodeDTO {
            phone_number: string;
        }
        export interface SendCodeResponse {
            kind: string;
            sendCodeResponse: AuthSendCodeResponse;
        }
        export interface SignInDTO {
            phone_number: string;
            phone_code_hash: string;
            phone_code: string;
        }
        export interface SignInResponseDTO {
            kind: string;
            signInResponse: string;
        }
        export interface TaskDTO {
            id: number;
            name: string;
            message: string;
            cron: string;
            is_active: boolean;
            user_uid: string;
            file: string | null;
            chats: string[];
            createdAt: string; // date-time
            updatedAt: string; // date-time
        }
        export interface TaskDeleteResponseDTO {
            kind: string;
            taskDeleteMessage: string;
        }
        export interface TaskListResponseDTO {
            kind: string;
            taskList: TaskDTO[];
        }
        export interface TaskResponseDTO {
            kind: string;
            task: TaskDTO;
        }
        export interface UpdateTaskDTO {
            name?: string;
            message?: string;
            cron?: string;
            is_active?: boolean;
            chats?: string[];
        }
        export interface UserDTO {
            uid: string;
            email: string;
            is_active: boolean;
        }
        export interface UserTelegramDTO {
            username: string;
            id: number;
        }
        export interface UserTelegramResponseDTO {
            kind: string;
            userTelegram: UserTelegramDTO;
        }
    }
}
declare namespace Paths {
    namespace AppControllerHello {
        namespace Responses {
            export type $200 = string;
        }
    }
    namespace AuthAppControllerCheckAuth {
        namespace Responses {
            export type $200 = Components.Schemas.AuthUserWithJwtTokenResponse;
        }
    }
    namespace AuthAppControllerConfirmRegistrationToken {
        export type RequestBody = Components.Schemas.ConfirmRegistrationTokenDTO;
        namespace Responses {
            export type $200 = Components.Schemas.AuthUserWithJwtTokenResponse;
            export type $201 = Components.Schemas.AuthUserWithJwtTokenResponse;
        }
    }
    namespace AuthAppControllerLogin {
        export type RequestBody = Components.Schemas.LoginDTO;
        namespace Responses {
            export type $200 = Components.Schemas.AuthUserWithJwtTokenResponse;
            export type $201 = Components.Schemas.AuthUserWithJwtTokenResponse;
        }
    }
    namespace AuthAppControllerRegistration {
        export type RequestBody = Components.Schemas.RegistrationDTO;
        namespace Responses {
            export type $200 = Components.Schemas.RegistrationResponseDTO;
            export type $201 = Components.Schemas.RegistrationResponseDTO;
        }
    }
    namespace AuthTelegramControllerGetMyUser {
        namespace Responses {
            export type $200 = Components.Schemas.UserTelegramResponseDTO;
        }
    }
    namespace AuthTelegramControllerSendCode {
        export type RequestBody = Components.Schemas.SendCodeDTO;
        namespace Responses {
            export type $200 = Components.Schemas.SendCodeResponse;
            export type $201 = Components.Schemas.SendCodeResponse;
        }
    }
    namespace AuthTelegramControllerSignIn {
        export type RequestBody = Components.Schemas.SignInDTO;
        namespace Responses {
            export type $200 = Components.Schemas.SignInResponseDTO;
            export type $201 = Components.Schemas.SignInResponseDTO;
        }
    }
    namespace TaskControllerCreateTask {
        export type RequestBody = Components.Schemas.CreateTaskDTO;
        namespace Responses {
            export type $200 = Components.Schemas.TaskResponseDTO;
            export type $201 = Components.Schemas.TaskResponseDTO;
        }
    }
    namespace TaskControllerDeleteTask {
        namespace Parameters {
            export type TaskId = string;
        }
        export interface PathParameters {
            taskId: Parameters.TaskId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.TaskDeleteResponseDTO;
        }
    }
    namespace TaskControllerGetAllMyTasks {
        namespace Responses {
            export type $200 = Components.Schemas.TaskListResponseDTO;
        }
    }
    namespace TaskControllerGetTask {
        namespace Parameters {
            export type TaskId = string;
        }
        export interface PathParameters {
            taskId: Parameters.TaskId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.TaskResponseDTO;
        }
    }
    namespace TaskControllerUpdateTask {
        namespace Parameters {
            export type TaskId = string;
        }
        export interface PathParameters {
            taskId: Parameters.TaskId;
        }
        export type RequestBody = Components.Schemas.UpdateTaskDTO;
        namespace Responses {
            export type $200 = Components.Schemas.TaskResponseDTO;
        }
    }
    namespace TelegramDialogsControllerGetMyDialogs {
        namespace Responses {
            export type $200 = Components.Schemas.DialogsResponseDTO;
        }
    }
}
