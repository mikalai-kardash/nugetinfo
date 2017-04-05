import { SemVer } from 'semver';

interface CatalogRoot {
    "@id": string;
    "@type": string[];

    items: CatalogPage[];
    count: number;
}

interface CatalogPage {
    "@id": string;
    "@type": string;

    parent: string;
    count: number;
    lower: string;
    upper: string;

    items: Package[];
}

interface Package {
    "@id": string;
    "@type": string;

    registration: string;
    packageContent: string;

    catalogEntry: PackageDetails;
}

interface PackageDetails {
    "@id": string;
    "@type": string;

    authors: string;
    description: string;
    iconUrl: string;
    id: string;
    language: string;
    licenseUrl: string;
    listed: boolean;
    minClientVersion: string;
    packageContent: string;
    projectUrl: string;
    published: string;
    requireLicenseAcceptance: boolean;
    summary: string;
    tags: string[];
    version: string;
}

interface PackageRegistry {
    GetPackage: (name: string) => Promise<CatalogRoot>;
}

class NugetPackageRegistry implements PackageRegistry {
    private repositoryURl = "https://api.nuget.org/v3/registration0/";

    GetPackage(name: string) {
        return new Promise<CatalogRoot>((resolve, reject) => {
            
        });
    }
}