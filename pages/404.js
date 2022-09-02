import Link from "next/link";
import MainContainer from "../components/MainContainer";

export default function NotFound() {
    return (
        <MainContainer keyword={"not found, error"}>
            <div>
                <h2>Oops! Why are you come to here???</h2>
                <p>go to <Link href="/"><a>Main Page</a></Link></p>
            </div>
        </MainContainer>
    )
}
