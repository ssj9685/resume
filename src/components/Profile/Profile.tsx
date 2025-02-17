import { css } from "@emotion/css";

export default function Profile() {
  return (
    <>
      <img
        id="profile-popover"
        //@ts-expect-error popover
        popover={"auto"}
        src="profile.jpg"
        width={"90%"}
        height={"95%"}
        className={css`
          object-fit: cover;
          cursor: pointer;
        `}
        onClick={(e) => e.currentTarget.hidePopover()}
      />
      <button
        className={css`
          border: none;
          outline: none;
          background: none;
          cursor: pointer;
        `}
        //@ts-expect-error popover
        popoverTarget={"profile-popover"}
      >
        <img
          alt="프로필사진"
          src="profile2.jpg"
          width={140}
          height={140}
          className={css`
            object-fit: cover;
            border-radius: 50% 50% 0 50%;
            margin-left: -28px;
          `}
        />
      </button>
    </>
  );
}
