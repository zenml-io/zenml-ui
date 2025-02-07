import { FetchError } from "@/lib/fetch-error";
import { objectToSearchParams } from "@/lib/url";
import { fetcher } from "../fetch";
import { notFound } from "../../lib/not-found-error";
import { ListServiceAccountsParams, ServiceAccountsList } from "../../types/service-accounts";
import { apiPaths, createApiPath } from "../api";

type ServiceAccountsOverview = {
	params: ListServiceAccountsParams;
};

export async function fetchAllServiceAccounts({
	params
}: ServiceAccountsOverview): Promise<ServiceAccountsList> {
	const url = createApiPath(apiPaths.serviceAccounts.all) + "?" + objectToSearchParams(params);
	const res = await fetcher(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});

	if (res.status === 404) notFound();

	if (!res.ok) {
		const errorData: string = await res
			.json()
			.then((data) => {
				if (Array.isArray(data.detail)) {
					return data.detail[1];
				}
				return data.detail;
			})
			.catch(() => "Failed to fetch service accounts");

		throw new FetchError({
			status: res.status,
			statusText: res.statusText,
			message: errorData
		});
	}
	return res.json();
}
