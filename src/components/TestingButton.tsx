import { Link } from "@/i18n/navigation";
import BugReportIcon from "@mui/icons-material/BugReport";

export function TestingButton() {
  return (
    <div className="fixed bg-blue-400/40 rounded-full p-2 z-50 bottom-30 right-4">
      <Link href="/testing">
        <BugReportIcon />
      </Link>
    </div>
  );
}
