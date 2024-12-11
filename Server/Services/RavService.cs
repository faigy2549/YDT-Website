using Entities;
using Repositories;
using Services;
using DTOs;
using AutoMapper;



public class RavService : IRavService
{
    private readonly IRavRepository _ravRepository;
    private readonly IMapper _mapper;

    public RavService(IRavRepository ravRepository, IMapper mapper)
    {
        _ravRepository = ravRepository;
        _mapper = mapper;
    }

    // Get all Rabbanim with their Shiurim (using AutoMapper to convert to DTOs)
    public async Task<IEnumerable<RavDTO>> GetAllAsync()
    {
        var rabbanim = await _ravRepository.GetAllAsync();

        return _mapper.Map<IEnumerable<RavDTO>>(rabbanim);
    }

    // Get a specific Rav by ID with their Shiurim (using AutoMapper)
    public async Task<RavDTO> GetByIdAsync(int id)
    {
        var rav = await _ravRepository.GetByIdAsync(id);
        if (rav == null) return null;

        return _mapper.Map<RavDTO>(rav);
    }

    public async Task<RavDTO> GetByNameAsync(string name)
    {
        var rav = await _ravRepository.GetByNameAsync(name);
        if (rav == null) return null;

        return _mapper.Map<RavDTO>(rav);
    }

    // Create a new Rav (using AutoMapper)
    public async Task<RavDTO> AddAsync(RavDTO ravDTO)
    {
        var rav = _mapper.Map<Rav>(ravDTO); // Map from DTO to entity

        await _ravRepository.AddAsync(rav);
        return _mapper.Map<RavDTO>(rav); // Map from entity to DTO
    }

    // Update an existing Rav (using AutoMapper)
    public async Task<RavDTO> UpdateAsync(int id, RavDTO ravDTO)
    {
        var rav = await _ravRepository.GetByIdAsync(id);
        if (rav == null) return null;

        _mapper.Map(ravDTO, rav); 

        await _ravRepository.UpdateAsync(rav);

        return _mapper.Map<RavDTO>(rav); 
    }
    public async Task DeleteAsync(int id)
    {
        var rav = await _ravRepository.GetByIdAsync(id);
        if (rav != null)
        {
            await _ravRepository.DeleteAsync(rav);
        }
        else
        {
            throw new ArgumentException($"rav with id {id} not found");
        }
    }
}
