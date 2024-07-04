import { Avatar, AvatarFallback, Spinner } from "@zenml-io/react-component-library";
import { ComponentListItem } from "../Configuration";
import { Tick } from "@/components/Tick";
import { ComponentBadge } from "../../ComponentBadge";
import { AWSPermissionsCard } from "./AWSPermissions";

type Props = {
	stackName: string;
	isLoading?: boolean;
	isSuccess?: boolean;
	displayPermissions?: boolean;
	names?: {
		connectorName?: string;
		artifactStoreName?: string;
		registryName?: string;
		orchestratorName?: string;
	};
};
export function AWSComponents({
	stackName,
	isLoading,
	isSuccess,
	names,
	displayPermissions = false
}: Props) {
	return (
		<div className="divide-y divide-theme-border-moderate overflow-hidden rounded-md border border-theme-border-moderate">
			<div className="flex items-center gap-3 bg-theme-surface-secondary p-5 text-text-lg font-semibold">
				{isLoading && <Spinner className="h-5 w-5 shrink-0 border-[3px]" />}
				{isSuccess && <Tick className="h-5 w-5" tickClasses="w-3 h-3" />}
				<Avatar type="square" size="lg">
					<AvatarFallback size="lg">{stackName[0]}</AvatarFallback>
				</Avatar>
				{stackName}
			</div>
			<div className="space-y-1 py-3 pl-9 pr-5">
				<ComponentListItem
					title={names?.connectorName || "IAM Role"}
					isLoading={isLoading}
					isSuccess={isSuccess}
					subtitle="Manage access to AWS resources"
					badge={<ComponentBadge type="annotator">Service Connector</ComponentBadge>}
					img={{
						src: "https://public-flavor-logos.s3.eu-central-1.amazonaws.com/service_connector/iam.webp",
						alt: "Sagemaker logo"
					}}
				/>
				{displayPermissions && <AWSPermissionsCard />}
			</div>
			<div className="py-3 pl-9 pr-5">
				<ComponentListItem
					title={names?.artifactStoreName || "S3 Bucket"}
					subtitle="Artifact storage for ML pipelines"
					badge={<ComponentBadge type="artifact_store">Artifact Store</ComponentBadge>}
					isLoading={isLoading}
					isSuccess={isSuccess}
					img={{
						src: "https://public-flavor-logos.s3.eu-central-1.amazonaws.com/artifact_store/aws.png",
						alt: "S3 logo"
					}}
				/>
			</div>
			<div className="py-3 pl-9 pr-5">
				<ComponentListItem
					title={names?.registryName || "ECR Repository"}
					subtitle="Container image storage"
					badge={<ComponentBadge type="container_registry">Container Registry</ComponentBadge>}
					isLoading={isLoading}
					isSuccess={isSuccess}
					img={{
						src: "https://public-flavor-logos.s3.eu-central-1.amazonaws.com/container_registry/aws.png",
						alt: "Sagemaker logo"
					}}
				/>
			</div>
			<div className="py-3 pl-9 pr-5">
				<ComponentListItem
					title={names?.orchestratorName || "SageMaker"}
					isLoading={isLoading}
					isSuccess={isSuccess}
					subtitle="Manage access to AWS resources"
					badge={<ComponentBadge type="orchestrator">Orchestrator</ComponentBadge>}
					img={{
						src: "https://public-flavor-logos.s3.eu-central-1.amazonaws.com/orchestrator/sagemaker.png",
						alt: "Sagemaker logo"
					}}
				/>
			</div>
		</div>
	);
}
