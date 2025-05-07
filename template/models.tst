${
    using System.Text.RegularExpressions;
    using Typewriter.Extensions.Types;
    using Typewriter.VisualStudio;
    
    static ILog log;
    static string directory = "models";
    static List<string> excludedModels = [
        "Duration"
    ];
    static List<string> exportedFiles = [];
    static class options
    {
      public static char indentationChar = ' ';
      public static int indentationCount = 2;
    }
    static List<KeyValuePair<string, string>> commentFormattingPatterns = new List<KeyValuePair<string, string>>() {
        new KeyValuePair<string, string>(@"<see cref=""\w:DClare\.Sdk\.([\w\.]*)"" \/>" , "@see {@link $1}"),
        new KeyValuePair<string, string>(@"[Gg]ets/sets the" , "The"),
        new KeyValuePair<string, string>(@"[Gg]ets/sets a" , "A"),
    };
    static Dictionary<string, dynamic> extensions = new Dictionary<string, dynamic>()
    {
        { 
            "ApiKeyAuthenticationSchemeDefinition" , new
            {
                Imports = new List<string>() 
                {
                    "import { AuthenticationScheme } from '../../enums/generated/authentication-scheme';",
                },
                Constructor = new List<string>()
                {
                    "this.scheme = AuthenticationScheme.ApiKey;",
                }
            }
        },
        { 
            "AgentCommunicationChannelDefinition" , new
            {
                Imports = new List<string>() 
                {
                    "import { AgentCommunicationChannelType } from '../../enums/generated/agent-communication-channel-type';",
                },
                Constructor = new List<string>()
                {
                    @"Object.defineProperty(this, 'type', {
      get () {
        return this?.a2A != null ? AgentCommunicationChannelType.A2A : '';
      },
      enumerable: true,
      configurable: true
    });",
                }
            }
        },
        { 
            "BearerAuthenticationSchemeDefinition" , new
            {
                Imports = new List<string>() 
                {
                    "import { AuthenticationScheme } from '../../enums/generated/authentication-scheme';",
                },
                Constructor = new List<string>()
                {
                    "this.scheme = AuthenticationScheme.Bearer;",
                }
            }
        },
        { 
            "McpTransportDefinition" , new
            {
                Imports = new List<string>() 
                {
                    "import { McpTransportType } from '../../enums/generated/mcp-transport-type';",
                },
                Constructor = new List<string>()
                {
                    @"Object.defineProperty(this, 'type', {
      get () {
        return this?.http != null ? McpTransportType.Http :
          this?.stdio != null ? McpTransportType.Stdio : '';
      },
      enumerable: true,
      configurable: true
    });",
                }
            }
        },
        {
            "OAuth2AuthenticationEndpointsDefinition", new
            {
                Constructor = new List<string>()
                {
                    "this.token = \"/oauth2/token\";",
                    "this.revocation = \"/oauth2/revoke\";",
                    "this.introspection = \"/oauth2/introspect\";",
                }
            }
        },
        {
            "OAuth2AuthenticationRequestDefinition", new
            {
                Imports = new List<string>() 
                {
                    "import { OAuth2RequestEncoding } from '../../enums/generated/o-auth2-request-encoding';",
                },
                Constructor = new List<string>()
                {
                    "this.encoding = OAuth2RequestEncoding.FormUrl;",
                }
            }
        },
        {
            "OAuth2AuthenticationSchemeDefinition", new
            {
                Imports = new List<string>() 
                {
                    "import { AuthenticationScheme } from '../../enums/generated/authentication-scheme';",
                },
                Constructor = new List<string>()
                {
                    "this.scheme = AuthenticationScheme.OAuth2;",
                }
            }
        },
        {
            "OpenIDConnectSchemeDefinition", new
            {
                Imports = new List<string>() 
                {
                    "import { AuthenticationScheme } from '../../enums/generated/authentication-scheme';",
                },
                Constructor = new List<string>()
                {
                    "this.scheme = AuthenticationScheme.OpenIDConnect;",
                }
            }
        }
    };
    
    const string NEW_LINE = "\r\n";

    Template(Settings settings)
    {
      settings
          .IncludeProject("DClare.Sdk")
          .DisableUtf8BomGeneration()
          .OutputFilenameFactory = (file) => $"..\\src\\{directory}\\generated\\{GetFileName(file, ".ts")}";
          
      settings.PartialRenderingMode = PartialRenderingMode.Combined;
      log = settings.Log;
    }

    bool IsModel(Record r)
    {
        return r.FullName.StartsWith("DClare.Sdk.Models") && !excludedModels.Contains(r.Name);
    }

    string ToKebabCase(string typeName)
    {
        return Regex.Replace(typeName, "(?<!^)([A-Z][a-z]|(?<=[a-z])[A-Z])", "-$1", RegexOptions.Compiled)
                   .Trim().ToLower();
    }

    string CleanupName(string name) => name.Replace("?", "").Replace("[]", "").Replace(" | null", "");

    string GetFileName(File file, string extention = "")
    {
        return ToKebabCase(file.Name).Replace(".cs", extention);
    }

    string GetFileName(Type t, string extention = "")
    {
        return ToKebabCase(CleanupName(t.Name)) + extention;
    }

    string Indent(int quantity, string message, Boolean newLine = true)
    {
        return new String(options.indentationChar, options.indentationCount * quantity) + message + (newLine ? NEW_LINE : "");
    }  

    System.IO.DirectoryInfo GetSrcDirectory(File file)
    {
        System.IO.DirectoryInfo directory = new System.IO.FileInfo(file.FullName).Directory;
        while (directory.Name != "submodules" && directory.Parent != null)
        {
            directory = directory.Parent;
        }
        return directory;
    }

    public static bool HasProperty(dynamic settings, string name)
    {
      if (settings is System.Dynamic.ExpandoObject)
        return ((IDictionary<string, object>)settings).ContainsKey(name);
      return settings.GetType().GetProperty(name) != null;
    }

    void BuildIndex(Record r)
    {
        var file = (File)r.Parent;
        var filePath = $"./{GetFileName(file)}";
        if (exportedFiles.Contains(filePath)) return;
        var exports = $"export {{ { String.Join(", ", file.Records.Select(r => r.Name)) } }} from '{filePath}';";
        string indexPath = System.IO.Path.Combine(new string[] {
            GetSrcDirectory(file).FullName,
            "..\\src",
            directory,
            "generated\\index.ts"
        });
        using (var stream = System.IO.File.Open(indexPath, exportedFiles.Count == 0 ? System.IO.FileMode.Create : System.IO.FileMode.Append, System.IO.FileAccess.Write, System.IO.FileShare.Read))
        {
            using (var writer = new System.IO.StreamWriter(stream))
            {
                writer.WriteLine(exports);
            }
        }
        exportedFiles.Add(filePath);
    }

    bool RequiresImport(Record r, Type t) {
      return (!t.IsPrimitive || t.IsEnum)
              && CleanupName(t.Name) != r.Name
              && (r.BaseRecord == null || t.Name != CleanupName(r.BaseRecord.Name))
              && CleanupName(t.Name) != "any"
              && CleanupName(t.Name) != "T"
              && CleanupName(t.Name) != "Version"
              && CleanupName(t.Name) != "Uri"
              && CleanupName(t.OriginalName) != "JObject"
              && CleanupName(t.OriginalName) != "JToken"
              && CleanupName(t.OriginalName) != "JSchema"
              && CleanupName(t.OriginalName) != "ExpandoObject"
              && CleanupName(t.OriginalName) != "JsonPatchDocument"
              && CleanupName(t.OriginalName) != "TimeOnly"              
              && !r.TypeArguments.Select(a => CleanupName(a.Name)).Contains(CleanupName(t.Name))
              && !t.Attributes.Any(a => a.Name == "JsonIgnore")
              ;
    }

    bool isRecordProp(Property p) => p.Type.Name.StartsWith("Record") && !p.Type.TypeArguments.All(arg => arg.IsPrimitive || CleanupName(arg.Name) == "any");

    IEnumerable<Typewriter.CodeModel.Type> GetImportedTypes(Record r, bool excludeOneOf = false) {
        return r.Properties
            .Where(p => !excludeOneOf || !CleanupName(p.Type.OriginalName).StartsWith("OneOf"))
            .SelectMany(p => !p.Type.IsGeneric ?
              new[] { p.Type } as IEnumerable<Type> :
              p.Type.FullName.Contains("System") ?
                p.Type.TypeArguments :
                (new[] { p.Type } as IEnumerable<Type>).Concat(p.Type.TypeArguments)
            )
            .Where(t => RequiresImport(r, t));
    }

    string Imports(Record r)
    {
        string output = "";
        if (r.BaseRecord != null && r.BaseRecord.Name != "Extendable")
        {
            /* The Parent of BaseRecord is the record `r`, not the `File` declaring the BaseRecord, using its type instead */
            output += Indent(0, $"import {{ {r.BaseRecord.Name} }} from './{GetFileName(r.BaseRecord)}';");
        }
        else 
        {
            output += Indent(0, $"import {{ Hydrator }} from '../../hydrator';");
        }
        output += GetImportedTypes(r)
            .Select(t => 
                CleanupName(t.OriginalName) != "JsonSchema" ?
                    Indent(0, $"import {{ {CleanupName(t.Name)} }} from '{(CleanupName(t.Name) == "Duration" ? ".." : ".")}/{GetFileName(t)}';") :
                    Indent(0, $"import {{ type JSONSchema as JsonSchema }} from 'json-schema-typed';")
            )
            .Distinct()
            .Aggregate("", (all, import) => $"{all}{import}")
            ;
        var hasIgnoredProperties = r.Properties.Any(p => p.Attributes.Any(a => a.Name == "JsonIgnore") && !IsOverride(r, p));
        var hasNamedProperties = r.Properties.Any(p => p.Attributes.Any(a => a.Name == "JsonPropertyName" && a.Value != p.name));
        var hasMappedProperties = GetImportedTypes(r, true).Any(t => 
            CleanupName(t.OriginalName) != "JsonSchema") && 
            !r.Properties.All(p => 
                p.Type.IsPrimitive || 
                (p.Type.IsGeneric && p.Type.TypeArguments.All(arg => arg.IsPrimitive)
            ) || 
            isRecordProp(p)
        );
        if (hasIgnoredProperties || hasNamedProperties || hasMappedProperties)
        {
            var transformerImports = new List<string>();
            if (hasIgnoredProperties) transformerImports.Add("Exclude");
            if (hasNamedProperties) transformerImports.Add("Expose");
            if (hasMappedProperties) transformerImports.Add("Type");
            output += Indent(0, $"import {{ {String.Join(", ", transformerImports)} }} from 'class-transformer';");
        }
        if(r.Properties.Any(p => isRecordProp(p)))
        {
            output += Indent(0, $"import {{ RecordTransform }} from '../../transformers/record-transform';");
        }
        if (extensions.Keys.Contains(r.Name))
        {
            dynamic extension = extensions[r.Name];
            if (extension != null && HasProperty(extension, "Imports"))
            {
                (extension.Imports as List<string>).ForEach(line =>
                {
                    output += Indent(0, line);
                });
            }
        }
        return output;
    }

    string TranslateComment(int depth, DocComment comment)
    {
        string output = "";
        if (!string.IsNullOrWhiteSpace(comment?.Summary))
        {
            string summary = comment.Summary;
            commentFormattingPatterns.ForEach(pattern =>
            {
                summary = Regex.Replace(summary, pattern.Key, pattern.Value);
            });
            output +=  Indent(depth, $" * {summary}");
        }
        if (comment?.Parameters != null && comment.Parameters.Count > 0)
        {
            output += String.Join("", comment.Parameters.Select(param => {
                var paramStr = Indent(depth, $" * @param {param.Name} - {param.Description}");
                commentFormattingPatterns.ForEach(pattern =>
                {
                    paramStr = Regex.Replace(paramStr, pattern.Key, pattern.Value);
                });
                return paramStr;
            }));
        }
        if (!string.IsNullOrWhiteSpace(comment?.Returns))
        {
            string returns = comment.Returns;
            commentFormattingPatterns.ForEach(pattern =>
            {
                returns = Regex.Replace(returns, pattern.Key, pattern.Value);
            });
            output += Indent(depth, $" * {returns}");
        }
        return output;
    }

    string Comments(Record r)
    {
        if (r.DocComment == null) return "";
        string output = "";
        output += Indent(0, $"/**");
        output += TranslateComment(0, r.DocComment);
        output += Indent(0, $" */", false);
        return output;
    }

    string Export(Record r)
    {
        string recordName = r.Name;
        if (r.IsGeneric)
        {
            recordName += $"<{String.Join(",",r.TypeArguments.Select(t => t.Name))}>";
        }
        if (r.BaseRecord != null && r.BaseRecord.Name != "Extendable")
        {
            return Indent(0, $"export class {recordName} extends {r.BaseRecord.Name}", false);
        }
        return Indent(0, $"export class {recordName} extends Hydrator<{recordName}>", false);
    }

    string Constructor(Record r) {
        string recordName = r.Name;
        if (r.IsGeneric)
        {
            recordName += $"<{String.Join(",",r.TypeArguments.Select(t => t.Name))}>";
        }
        string output = NEW_LINE;
        output += Indent(1, $"constructor(model?: Partial<{recordName}>) {{");
        output += Indent(2, $"super(model);");
        IEnumerable<Property> foreignEntities = r.Properties.Where(p => 
            // TODO: handle property with "self" type as they would be excluded by "RequiresImport"
            (RequiresImport(r, p.Type) && ConvertTypeName(p.Type.Name) != "JsonSchema") ||
            (p.Type.IsEnumerable && p.Type.TypeArguments.Any(arg => RequiresImport(r, arg) && ConvertTypeName(arg.Name) != "JsonSchema"))
        );
        if (foreignEntities.Any())
        {
            output += Indent(2, "if (model) {");
            if (foreignEntities.Any())
            {
                foreignEntities.ToList().ForEach(p =>
                {
                    string propertyName = p.name;
                    if (!p.Type.IsEnumerable)
                    {
                        if (!p.Type.IsGeneric)
                        {
                            output += Indent(3, $"if (model.{propertyName}) this.{propertyName} = new {CleanupName(p.Type.Name)}(model.{propertyName});");
                        }
                        else
                        {
                            output += Indent(3, $"if (model.{propertyName}) this.{propertyName} = model.{propertyName};");
                        }
                    }
                    else if (p.Type.TypeArguments.All(arg => arg.IsPrimitive || arg.name == "any"))
                    {
                        if (p.Type.TypeArguments.Count == 1) // Assume List<T> or alike
                        {
                            output += Indent(3, $"this.{propertyName} = model.{propertyName} ? model.{propertyName} : [];");
                        }
                        else // Assume Record<string, T> or alike
                        {
                            output += Indent(3, $"this.{propertyName} = model.{propertyName} ? model.{propertyName} : {{}};");
                        }
                    }
                    else
                    {
                        if (p.Type.TypeArguments.Count == 1) // Assume List<T> or alike
                        {
                            output += Indent(3, $"this.{propertyName} = model.{propertyName} ? model.{propertyName}.map((m: any) => new {CleanupName(p.Type.Name)}(m)) : [];");
                        }
                        else // Assume Record<string, T> or alike
                        {
                            output += Indent(3, $"this.{propertyName} = model.{propertyName} ? Object.entries(model.{propertyName}).reduce((acc, [key, m]) => {{ acc[key] = new {CleanupName(p.Type.TypeArguments[1].Name)}(m); return acc; }}, {{}} as {ConvertTypeName(p.Type.Name)}) : {{}};");
                        }
                    }
                });
            }
            output += Indent(2, "}");
        }
        if (extensions.Keys.Contains(r.Name))
        {
            dynamic extension = extensions[r.Name];
            if (extension != null && HasProperty(extension, "Constructor"))
            {
                (extension.Constructor as List<string>).ForEach(line =>
                {
                    output += Indent(2, line);
                });
            }
        }
        output += Indent(1, $"}}");
        return output;
    }

    string ConvertTypeName(string typeName) {
        var output = typeName
            .Replace(" | null", "")
            .Replace("Uri", "string") /* URL ? */
            ;
        var replacements = new (string pattern, string replacement)[] 
        {
            (@"OneOf<\s*(\w*)\s*,\s*(\w*)\s*>", "$1 | $2"),
        };
        foreach (var (pattern, replacement) in replacements)
        {
            output = Regex.Replace(output, pattern, replacement);
        }
        return output;
    }

    string Property(Property p)
    {
        string output = "";
        output += Indent(1, $"/**");
        output += TranslateComment(1, p.DocComment);
        output += Indent(1, $" */");
        var jsonPropertyName = p.Attributes.FirstOrDefault(a => a.Name == "JsonPropertyName")?.Value;
        if (p.Attributes.Any(a => a.Name == "JsonIgnore")) 
        {
            output += Indent(1, $"@Exclude()");
        }
        else if (jsonPropertyName != p.name)
        {
            output += Indent(1, $"@Expose({{ name: '{jsonPropertyName}' }})");
        }
        var underlyingType = !p.Type.IsGeneric ? ConvertTypeName(p.Type.Name) : ConvertTypeName(p.Type.TypeArguments[p.Type.TypeArguments.Count - 1].Name);
        if (
            !(p.Type.IsPrimitive && !p.Type.IsGeneric) // Record is primitive...?
            && (!p.Type.IsGeneric || !p.Type.TypeArguments.All(a => a.IsPrimitive))
            && underlyingType != "JsonSchema"
            && underlyingType != "any"
            && CleanupName(p.Type.OriginalName) != "Uri"
            && !CleanupName(p.Type.OriginalName).StartsWith("OneOf")
        )
        {
            if (!p.Type.Name.StartsWith("Record"))
            {
                output += Indent(1, $"@Type(() => {underlyingType})");
            }
            else
            {
                output += Indent(1, $"@RecordTransform({underlyingType})");
            }
        }
        var isJsonIgnored = p.Attributes.Any(a => a.Name == "JsonIgnore");
        output += Indent(1, $"{p.name}{(p.Type.IsNullable || isJsonIgnored  ? "?": "")}: {ConvertTypeName(p.Type.Name)};");
        output += NEW_LINE;
        return output;
    }

    bool IsOverride(Record r, Property p)
    {
        Record record = r;
        bool isOverride = false;
        while(record.BaseRecord != null)
        {
            isOverride = record.BaseRecord.Properties.Any(bp => bp.Name == p.Name);
            if (isOverride) break;
            record = record.BaseRecord;
        }
        return isOverride;
    }

    string DeclareProperties(Record r)
    {
        var output = String.Join("",
            r.Properties
                .Where(p => !IsOverride(r, p))
                .Select(p => Property(p))
                .Distinct()
        );
        if (r.BaseRecord?.Name == "Extendable")
        {
            output += Indent(1, $"/**");
            output += Indent(1, $" * Extension");
            output += Indent(1, $" */");
            output += Indent(1, "[key: string]: any;");
        }
        return output.TrimEnd();

    }
}/*
 * Copyright © 2025-Present The DClare Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


 //!\ This file has been generated, any modification will be lost /!\\


$Records($IsModel)[$BuildIndex$Imports
$Comments
$Export {
$Constructor
$DeclareProperties
}]